import { laptopSection } from "../data";

const LaptopSection = () => {
  return (
    <section className="laptop full-width-split-screen">
      <img src="./images/illustration-laptop-mobile.svg" alt="" />
      <div>
        {laptopSection.map((el) => (
          <div key={el.id}>
            <h2>{el.title}</h2>
            <p>{el.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default LaptopSection;
