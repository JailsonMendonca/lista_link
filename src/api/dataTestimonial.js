import Testimonial from "../../FakeData/testimonial.json";

const DataTestimonial = (req, res) => {
  console.log(Testimonial)
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(Testimonial));
};
export default DataTestimonial;
