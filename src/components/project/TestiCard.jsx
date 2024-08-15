import testimonials from '/src/data/testimonials.json';
import TestiImage from './TestiImage';
import TestiDescription from './TestiDescription';
import TestiBody from './TestiBody';

const TestiCard = () => {
  return (
    <>
      {testimonials.map((testimonial) => (
        <div className="testimony-card reveal-bottom" key={testimonial.id}>
          <span className="client-profile">
            <TestiImage image={testimonial.image} />
            <TestiDescription clientName={testimonial.client} title={testimonial.title} instagramUrl={testimonial.instagramUrl} instagramName={testimonial.instagramName} />
          </span>

          <TestiBody body={testimonial.body} />
        </div>
      ))}
    </>
  );
};

export default TestiCard;
