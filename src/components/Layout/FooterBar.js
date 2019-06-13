import css from "./footer.scss";

const NavigationBar = () => (
  // <div
  //   className="bg-brand-dark"
  //   style={{ paddingTop: "20px", paddingBottom: "20px" }}
  //   id={css["footer-print"]}
  // >
  <div className={css.footer}>
    <div>
      <a href="/collaborate">Collaborate</a>
    </div>
    <div>
      <a href="/faq">FAQ</a>
    </div>
    <div>
      <a href="/registry">Registry</a>
    </div>
    <div>
      <a href="/privacy">Privacy Policy</a>
    </div>
    <div>
      <a href="https://github.com/OpenCerts">Github</a>
    </div>
  </div>
  // </div>
);

export default NavigationBar;
