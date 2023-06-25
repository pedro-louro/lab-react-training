import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/ColorBox';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import Facebook from './components/Facebook';
import SignupPage from './components/SignupPage';

function App() {
  return (
    <div className="App">
      <h2>ID Card</h2>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14').toDateString()}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11').toDateString()}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <div>
        <h2>Greetings</h2>
        <Greetings lang="de" children="Ludwig" />
        <Greetings lang="fr" children="François" />
      </div>
      <div>
        <h2>Random</h2>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>
      <div>
        <h2>Box Color</h2>
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>
      <div>
        <h2>Credit Card</h2>
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <div>
        <h2>Rating</h2>
        <Rating value={0} />
        <Rating value={1.49} />
        <Rating value={1.5} />
        <Rating value={3} />
        <Rating value={4} />
        <Rating value={5} />
      </div>
      <div>
        <h2>Driver Card</h2>
        <DriverCard
          name="Travis Kalanick"
          rating={4.2}
          img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
          car={{
            model: 'Toyota Corolla Altis',
            licensePlate: 'CO42DE',
          }}
        />
        <DriverCard
          name="Dara Khosrowshahi"
          rating={4.9}
          img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
          car={{
            model: 'Audi A3',
            licensePlate: 'BE33ER',
          }}
        />
      </div>
      <div>
        <h2>Like Button</h2>
        <LikeButton />
      </div>
      <div>
        <h2>Clickable Picture</h2>
        <ClickablePicture />
      </div>
      <div>
        <h2>Dice</h2>
        <Dice />
      </div>
      <div>
        <h2>Carousel</h2>
        <Carousel
          images={[
            'https://randomuser.me/api/portraits/women/1.jpg',
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
            'https://randomuser.me/api/portraits/men/2.jpg',
          ]}
        />
      </div>
      <div>
        <h2>Numbers Table</h2>
        <NumbersTable limit={12} />
      </div>
      <div>
        <h2>Facebook</h2>
        <Facebook />
      </div>
      <div>
        <h2>Signup Page</h2>
        <SignupPage />
      </div>
    </div>
  );
}

export default App;
