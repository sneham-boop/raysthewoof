import Image from "next/image";

export default function PetImage({ name = "Happy Pup", img, intro, desc }) {
  return (
    <>
      <section>
        <Image src={img} alt="Picture of a triangle" width={400} />
        <div>
          <h2>{name}</h2>
          <p>{intro}</p>
          <p>{desc}</p>
        </div>
      </section>
    </>
  );
}
