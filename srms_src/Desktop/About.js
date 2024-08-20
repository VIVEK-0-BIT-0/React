import classes from "./About.module.css";
import MainNavigation from ".././Components/MainNavigation";
import desktop from "../desktop.png";

export default function About() {
  return (
    <div class={classes.section}>
      <MainNavigation />
      <img src={desktop} alt="About Us" class={classes.image} />
      <p class={classes.paragraph}>
        Welcome to the Student Result Management System, where excellence meets
        efficiency! Our platform is designed to streamline and enhance the
        process of managing and analyzing student results, providing educational
        institutions with a powerful tool to track academic performance
        seamlessly. Our Mission At Student Result Management System, our mission
        is to revolutionize the way educational institutions handle student
        results. We aim to simplify the entire process, from result entry to
        analysis, and empower educators with valuable insights to support
        student success.
      </p>
    </div>
  );
}
