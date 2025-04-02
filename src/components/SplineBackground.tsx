import { useEffect, useRef } from 'react';

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

    // Ensure the script is loaded
    const loadSplineScript = () => {
      return new Promise<void>((resolve) => {
        // Check if script already exists
        const existingScript = document.querySelector('script[src="https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js"]');
        
        if (existingScript && (existingScript as HTMLScriptElement).hasAttribute('data-loaded')) {
          resolve();
          return;
        }
        
        const scriptElement = existingScript as HTMLScriptElement || document.createElement('script');
        
        if (!existingScript) {
          scriptElement.type = 'module';
          scriptElement.src = 'https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js';
          document.head.appendChild(scriptElement);
        }
        
        const handleLoad = () => {
          scriptElement.setAttribute('data-loaded', 'true');
          resolve();
        };
        
        scriptElement.addEventListener('load', handleLoad);
      });
    };

    // Load script then set up viewer
    loadSplineScript().then(() => {
      // Small delay to ensure custom elements are registered
      setTimeout(() => {
        if (isMounted) {
          setupSplineViewer();
        }
      }, 100);
    }).catch(error => {
      console.error('Failed to load Spline script:', error);
    });

    // Cleanup function
    return () => {
      isMounted = false;
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