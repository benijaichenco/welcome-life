import HandsBg from "../images/hands-bg.jpeg";
import Babies from "../images/babies.jpeg";

function Home() {
  return (
    <div className="home heb">
      <section className="home-section-top">
        <div className="right-container">
          <h1 className="header heb-title">אירוע אמנותי על הקשר בין חוויית הלידה והמפגש עם החדש</h1>
          <br />
          <br />
          <br />
          <div className="text-container">
            <p className="text heb-text">אנחנו פביאן פיטוסי וגרסיאלה חייצ'נקו, זוג שיוצרים ביחד.</p>
            <br />
            <p className="text heb-text">
              בדרך ארוכת שנים, בעבודות מגוונות המשלבות תיעוד צילומי, וידאו ארט, מיצגים במרחב ציבורי,
              פרויקטים קהילתים ועוד, פיתחנו שפת יצירה משותפת וייחודית בתדר האהבה.
            </p>
          </div>
        </div>
        <div className="left-container">
          <img src={Babies} alt="" />
        </div>
      </section>
      <section className="home-section-bottom">
        <div className="right-container">
          <img src={HandsBg} alt="" />
        </div>
        <div className="left-container">
          <h4 className="title heb-title">חוויה אמנותית המברכת את החיים.</h4>
          <br />
          <br />
          <div className="text-container">
            <p className="text heb-text">
              יצירה שמתעסקת בחווית הלידה, גילוי החדש והקשר שביניהם. אירוע אמנותי המזמין ומאפשר
              למתארחים להיות מי שצופה, מי שמתבונן, מי שחווה ומי שיוצר בתוכו.
            </p>
            <br />
            <p className="text heb-text">
              אופן החוויה: אפשר לפגוש את היצירה בביקור חופשי כאורח בודד וגם לקחת חלק בפעימה סדנאית
              המתקיימת בזמנים מוגדרים.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
