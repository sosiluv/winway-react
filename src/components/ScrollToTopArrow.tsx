import { useEffect, useState } from 'react';

export default function ScrollToTopArrow() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const scrollContainer = document.documentElement;

    const onScroll = () => {
      setVisible(scrollContainer.scrollTop > 200);
    };

    scrollContainer.addEventListener('scroll', onScroll);
    return () => scrollContainer.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        document.documentElement.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
      className="
        fixed bottom-6 right-6
        z-[9999]
        w-12 h-12 rounded-full
        bg-slate-900 text-white
        flex items-center justify-center
        shadow-lg
        hover:bg-slate-700
        transition-all duration-300
      "
    >
      ↑
    </button>
  );
}
