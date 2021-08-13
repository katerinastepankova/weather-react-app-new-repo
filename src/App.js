import './App.css';
import Footer from './Footer';
import Header from './Header';
import SelectCity from './SelectCity';
import UseEffectFetch from './hooks/UseEffectFetch';
import { API_KEY, API_BASE_URL } from './apis/config';
import RowList from './RowList';
import cityList from './data/cityList.json';

const App = () => {
  const { data, isLoading, setUrl, error} = UseEffectFetch();

  console.log(data);

  // const dataPole = ['Ostrava', 'Praha', 'Brno'];

  // error handling and loading
  const getContent = () => {
    if (error) return <h2>Chyba při získání dat</h2>;
    if (!data && isLoading) return <h2 className="loading">Hledám...</h2>;
    if (!data) return null;
    return <RowList weathers={data.list} />;
  };

  return (
    <div className="App">
      <Header />

      <SelectCity
        suggestions={cityList}
        onSearch={(city) => {
          setUrl(
            `${API_BASE_URL}//data/2.5/forecast?q=${city}&units=metric&lang=cz&appid=${API_KEY}`,
          );
        }}
      />
      {getContent()}
      {/* {data && <RowList weathers={data.list}/>} */}
    

      <Footer />
    </div>
  );
};

export default App;
