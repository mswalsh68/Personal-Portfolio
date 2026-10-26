// Shared inline icons for the portfolio, ported from the redesign markup.
function Svg({ children, ...rest }) {
  return (
    <svg aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" {...rest}>
      {children}
    </svg>
  );
}

export function ArrowRight(props) {
  return <Svg {...props}><path d="M5 12h14M13 6l6 6-6 6" /></Svg>;
}

export function ArrowUpRight(props) {
  return <Svg {...props}><path d="M7 17L17 7M8 7h9v9" /></Svg>;
}

export function Download(props) {
  return <Svg {...props}><path d="M12 4v12M6 10l6 6 6-6M5 20h14" /></Svg>;
}
