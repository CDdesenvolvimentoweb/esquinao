import { useEffect, useRef } from 'react';
import '@splinetool/viewer';

const SplineBackground = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Track mounted state to prevent updates after unmount
    let isMounted = true;

    // Function to create and configure spline viewer
    const setupSplineViewer = () => {
      if (!containerRef.current || !isMounted) return;
      
      try {
        // Clear any existing content
        containerRef.current.innerHTML = '';
        
        // Use direct HTML approach instead of dynamic creation
        containerRef.current.innerHTML = `
          <spline-viewer
            url="https://prod.spline.design/hQ4f2GTJzvIHABFL/scene.splinecode"
            style="width: 100%; height: 100%; position: absolute; top: 0; left: 0; border-radius: inherit; z-index: 0;"
            loading-anim="true"
          ></spline-viewer>
        `;
      } catch (error) {
        console.error('Error setting up Spline viewer:', error);
      }
    };

    // Setup viewer with a small delay to ensure custom elements are registered
    const timeout = setTimeout(() => {
      if (isMounted) {
        setupSplineViewer();
      }
    }, 100);

    // Cleanup function
    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
      style={{ 
        borderRadius: 'inherit',
        zIndex: 0,
        opacity: 1,
        transition: 'opacity 0.5s ease',
        pointerEvents: 'none'
      }}
    />
  );
};

export default SplineBackground;