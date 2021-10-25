function Video({ mealLink }) {
  return (
    <div className="meal-video">
      <h3>
        <u>Tutorial video</u>
      </h3>
      <iframe title="tutorial video" src={mealLink}></iframe>
    </div>
  );
}
export default Video;
