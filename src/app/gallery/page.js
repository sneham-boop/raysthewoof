import PetImage from "./PetImage";
import img0 from "../../images/Silo1.jpeg";
import img1 from "../../images/Silo2.jpeg";
import img2 from "../../images/Silo3.jpeg";
import img3 from "../../images/Silo4.jpeg";
import img4 from "../../images/Coco1.jpeg";
import img5 from "../../images/Coco2.jpeg";
import styles from "./page.module.css";

export default function Gallery() {
  const desc =
    "The shock very hand that feed shibe heckin angery woofer. Shibe wrinkler heckin good boys such treat you are doing me a frighten, woofer maximum borkdrive. Bork fat boi sub woofer boof very taste wow sub woofer, big ol pupper heck noodle horse many pats you are doing me the shock the neighborhood pupper, fat boi many pats boofers blep. Borking doggo fluffer boofers fluffer doggorino h*ck, smol borking doggo with a long snoot for pats wow such tempt I am bekom fat. yapper he made many woofs pupper. Tungg big ol pupper pupper blop borkdrive borkf, shibe heckin angery woofer doing me a frighten. Shooberino floofs fluffer very hand that feed shibe he made many woofs, wrinkler maximum borkdrive waggy wags. Shoober ruff fat boi, what a nice floof. bork yapper. Woofer long water shoob sub woofer shoob, noodle horse heckin. He made many woofs puggo h*ck stop it fren shoob the neighborhood pupper very hand that feed shibe, maximum borkdrive waggy wags you are doing me the shock shoober. Heckin good boys and girls the neighborhood pupper adorable doggo smol borking doggo with a long snoot for pats floofs, waggy wags boofers. Noodle horse shibe mlem length boy, yapper boof shooberino, much ruin diet doge. Big ol pupper woofer shoob length boy smol heckin good boys clouds big ol, corgo long woofer much ruin diet pupperino shibe he made many woofs";
  const intro =
    "Silo is our frequent 9 year old visitor. He loves belly rubs and a good glob of peanut butter. Very good spot extremely cuuuuuute very jealous pupper ruff doggo, you are doing me.";
  return (
    <main className={`${styles.main}`}>
      <h1>Meet our happy tails!</h1>
      <p>
        At Ray&apos;s The Woof! our furry visitors are our family. Heckin good boys waggy wags shibe sub
        woofer mlem wow very biscit heckin, borking doggo pats noodle horse fat
        boi. Waggy wags length boy noodle horse blop noodle horse smol, puggo
        such treat very good spot very hand that feed shibe. Boofers ur givin me
        a spook very hand that feed shibe doing me a frighten clouds corgo,
        doggo long doggo shoober. Puggo heckin good boys and girls smol borking
        doggo with a long snoot for pats tungg heckin angery woofer puggorino
        shooberino, ruff big ol shoob shooberino. Shoob blop maximum borkdrive
        you are doing me the shock, porgo you are doing me a frighten big ol
        doggo, very taste wow stop it fren.
      </p>
      <p>
        Doing me a frighten pupperino the neighborhood pupper he made many woofs
        waggy wags, wow such tempt pupper borkf. Blop fat boi yapper pupper,
        woofer. Big ol aqua doggo much ruin diet the neighborhood pupper sub
        woofer much ruin diet puggo, very good spot you are doin me a concern
        waggy wags long woofer. snoot lotsa pats. Shoober doggo fat boi you are
        doing me the shock smol borking doggo with a long snoot for pats wow
        such tempt big ol pupper, smol heckin most angery pupper I have ever
        seen length boy doggorino. Heck most angery pupper I have ever seen
        adorable doggo ruff porgo noodle horse, tungg doggorino smol borking
        doggo with a long snoot for pats dat tungg tho. ruff wrinkler shoob.
        Lotsa pats borking doggo very jealous pupper h*ck, tungg very good spot.
      </p>
      <div>
        <PetImage name="Silo" img={img0} intro={intro} desc={desc} />

        <PetImage name="Jhunju" img={img2} intro={intro} desc={desc} />
        <PetImage name="Gindo" img={img1} intro={intro} desc={desc} />
        <PetImage name="Limbu" img={img3} intro={intro} desc={desc} />
        <PetImage name="Coco" img={img4} intro={intro} desc={desc} />
        <PetImage name="Kokuti" img={img5} intro={intro} desc={desc} />
      </div>
    </main>
  );
}
