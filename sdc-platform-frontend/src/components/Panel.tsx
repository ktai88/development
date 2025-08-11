type Props = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Container Panel using a given amount of padding and colours for reuse.
 */
const Panel = (props: Props) => {
  const className =
    "rounded-[8px] py-4 mb-[1em]" + props.className;
  return <div className={className}>{props.children}</div>;
};

export default Panel;
