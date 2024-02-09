const CustomBlocks = ({ id, boxStyle }) => {
  return (
    <div id={id} style={boxStyle} className="BlocksDesc">
      <div>{id}</div>
    </div>
  );
};
export default CustomBlocks;
