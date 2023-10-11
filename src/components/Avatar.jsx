function Avatar({ firstName, image, lastName }) {
  return (
    <>
      <h1>
        {firstName} {lastName}
      </h1>
      ;
      <img src={image} alt="" />
    </>
  );
}
export default Avatar;
