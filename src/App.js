
import './App.css'; //(./App.css = berada di dalam folder yang sama dengan App.js)

// membuat looping
// 1. buat data array (const foto = [])
const foto = [
  "https://picsum.photos/200/130?random=1", 
  "https://picsum.photos/200/130?random=2", 
  "https://picsum.photos/200/130?random=3", 
  "https://picsum.photos/200/130?random=4", 
  "https://picsum.photos/200/130?random=5", 
  "https://picsum.photos/200/130?random=6", 
  "https://picsum.photos/200/130?random=7", 
  "https://picsum.photos/200/130?random=8", 
  "https://picsum.photos/200/130?random=9", 
  "https://picsum.photos/200/130?random=10", 
  "https://picsum.photos/200/130?random=11", 
  "https://picsum.photos/200/130?random=12", 
  "https://picsum.photos/200/130?random=13", 
  "https://picsum.photos/200/130?random=14", 
  "https://picsum.photos/200/130?random=15", 
  "https://picsum.photos/200/130?random=16", 
  "https://picsum.photos/200/130?random=17", 
  "https://picsum.photos/200/130?random=18", 
  "https://picsum.photos/200/130?random=19", 
  "https://picsum.photos/200/130?random=20", 
]

function NamaPembuat(props) {
  const Alamat = () => {
    alert("ini alamat developer");
  }

  const Email = () => {
    prompt("ini email developer");
  }

  function Instagram () {
    // let tanya = window.confirm("Maneh arek asup ka Instagram Developer ?")
    // if( tanya === true ) 
    // {
    //   alert("Tapi kudu aya duit 15 milyar. OK teu?")
    // } else  {
    //   alert("yahh")
    // }
    alert("Assalamualaikum");
    let deui = true;

    while( deui === true ) {
      let aran = prompt("Aran maneh saha mang ?");
      alert("woyy " + aran + " fuck youuuu");

      deui=window.confirm("Hayang deui teu?");
    }
    alert("Hatur nuhun kang.. ");
  }

  return (
    <div className='pembuat'>
      <h1 className='headingSite'>{props.nama}</h1>
      {/* <h3 className='headingSite'>
        {props.alamat} | {props.email} | {props.instagram}
      </h3> */}
      <button onClick={Alamat}>{props.alamat}</button>
      <button onClick={Email}>{props.email}</button>
      <button onClick={Instagram}>{props.instagram}</button>
    </div>
  )
}

function Header(props) {
  return (
      <>
        <h3 className='subtittle'>{props.tema}</h3>
      </>
    )
  }

function Foto () {
  return (
    <>
      <div className='boxPictures'>
        {/* untuk menjalankan kode html di dalam JS pake {} */}
        {
          // 2. foto.map()=memanggil aray
          // 3. fungsi = foto.map( () ). didalam fungsi ada 2 parameter. 1 = parameter yang mau di keluarin 2. index
          // 4. row function = foto.map( (url, index) => )
          // panggil url = foto.map( (url, index) => ( ))
          // 5. panggil img = img src={url}
          // index looping = img src={url}
          foto.map( (url, index) => ( 
            <img 
            src={url} className="imageProfile" 
            alt={`foto-${index}`}
            key={index} />
          ))
        }
      </div>
    </>

  )
}

function TombolKondisi() {
  return (
    <>
      <button>True</button>
    </>
  )
}


// fungsi di react mengembalikan code di HTML
// class di react akan di anggap sebagai keyword untuk membuat kelas di JS.
function App () {
  // fungsi mengembalikan maksimal satu tag elemen, kalo ada 2 gunakan fragen <> </> atau bungkus dengan <div></div>
  return (
    <>
      <NamaPembuat 
      nama="IVAN SITE"
      alamat="Jl. Aja duls siapa tau bisaaaaa, Karawang - JawaBarat"
      email="ivanapriana@gmail.com"
      instagram="@ivanapriana"
      />
      <hr className="garis"/>
      <Header tema="Website pameran photo"/>
      <hr className="garis"/>
      <TombolKondisi/>
      <Foto />
      
    </>
  );
}

export default App;
