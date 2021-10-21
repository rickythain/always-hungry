function Video({ mealLink }) {
  return (
    <div className="meal-video">
      <iframe width="330" height="190" src={mealLink}></iframe>
    </div>
  );
}
export default Video;
