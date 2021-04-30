import './App.css';
import React , {useEffect , useState} from 'react';
import axios from 'axios';
import './App.css'
import Swal from 'sweetalert2'


function App() {



  const [Data, setData] = useState([]);
  const [UnstableData , setUnstabelData] = useState([]);
  useEffect( () => {
    async function fetchData(){
      await axios.get("https://neelpatel05.pythonanywhere.com/").then((resp) => {setData(resp.data)
    setUnstabelData(resp.data)})

    }
    fetchData();
        } , []);


  const Search = (query) => {
    if(query == "" || query == undefined || query == null) setUnstabelData(Data);
    let newData = Data.map((element) => {
      return element.name.toLowerCase().includes(query.toLowerCase()) ? element : {}
    })
    newData = newData.filter(value => JSON.stringify(value) !== '{}')
    setUnstabelData(newData)
  }
  const ShowInfo = async (element) => {
    console.log(element.name)
    if(element.name == "Sulfer"){
      Swal.fire({
        title: `<strong>${element.name}</strong>`,
        icon: 'info',
        html:
        `
        symbol: ${element.symbol}<br />
        atomicMass: ${element.atomicMass}<br />
        atomicNumber: ${element.atomicNumber}<br />
        ` +
          '<img width="100" height="100" src="https://cdn.discordapp.com/attachments/836363285803827230/837476681487745084/Sulfur-sample.png" /> ',
        focusConfirm: true,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
      })
    }
    else if(element.name == "Carbon"){
      Swal.fire({
        title: `<strong>${element.name}</strong>`,
        icon: 'info',
        html:
        `
        symbol: ${element.symbol}<br />
        atomicMass: ${element.atomicMass}<br />
        atomicNumber: ${element.atomicNumber}<br />
        ` +
          '<img width="100" height="100" src="https://cdn.discordapp.com/attachments/836363285803827230/837476776698576987/Z.png" /> ',
        focusConfirm: true,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
      })
    }
    else if(element.name == "Copper"){
      Swal.fire({
        title: `<strong>${element.name}</strong>`,
        icon: 'info',
        html:
        `
        symbol: ${element.symbol}<br />
        atomicMass: ${element.atomicMass}<br />
        atomicNumber: ${element.atomicNumber}<br />
        ` +
          '<img width="100" height="100" src="https://cdn.discordapp.com/attachments/836363285803827230/837476927060049990/Z.png" /> ',
        focusConfirm: true,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
      })
    }
    else if(element.name == "Iodine"){
      Swal.fire({
        title: `<strong>${element.name}</strong>`,
        icon: 'info',
        html:
        `
        symbol: ${element.symbol}<br />
        atomicMass: ${element.atomicMass}<br />
        atomicNumber: ${element.atomicNumber}<br />
        ` +
          '<img width="100" height="100" src="https://cdn.discordapp.com/attachments/836363285803827230/837477301284896798/2Q.png" /> ',
        focusConfirm: true,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
      })
    }
    else if(element.name == "Iron"){
      Swal.fire({
        title: `<strong>${element.name}</strong>`,
        icon: 'info',
        html:
        `
        symbol: ${element.symbol}<br />
        atomicMass: ${element.atomicMass}<br />
        atomicNumber: ${element.atomicNumber}<br />
        ` +
          '<img width="100" height="100" src="https://cdn.discordapp.com/attachments/836363285803827230/837477481018949652/9k.png" /> ',
        focusConfirm: true,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
      })
    }
    else if(element.name == "Silver"){
      Swal.fire({
        title: `<strong>${element.name}</strong>`,
        icon: 'info',
        html:
        `
        symbol: ${element.symbol}<br />
        atomicMass: ${element.atomicMass}<br />
        atomicNumber: ${element.atomicNumber}<br />
        ` +
          '<img width="100" height="100" src="https://cdn.discordapp.com/attachments/836363285803827230/837477747034423316/Z.png" /> ',
        focusConfirm: true,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
      })
    }
    else if(element.name == "Cobalt"){
      Swal.fire({
        title: `<strong>${element.name}</strong>`,
        icon: 'info',
        html:
        `
        symbol: ${element.symbol}<br />
        atomicMass: ${element.atomicMass}<br />
        atomicNumber: ${element.atomicNumber}<br />
        ` +
          '<img width="100" height="100" src="https://cdn.discordapp.com/attachments/836363285803827230/837488490069491712/download_1.jpeg" /> ',
        focusConfirm: true,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
      })
    }
    else if(element.name == "Lithum"){
      Swal.fire({
        title: `<strong>${element.name}</strong>`,
        icon: 'info',
        html:
        `
        symbol: ${element.symbol}<br />
        atomicMass: ${element.atomicMass}<br />
        atomicNumber: ${element.atomicNumber}<br />
        ` +
          '<img width="100" height="100" src="https://cdn.discordapp.com/attachments/836363285803827230/837488385664483379/download.jpeg" /> ',
        focusConfirm: true,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
      })
    }
    else if(element.name == "Potassium"){
      Swal.fire({
        title: `<strong>${element.name}</strong>`,
        icon: 'info',
        html:
        `
        symbol: ${element.symbol}<br />
        atomicMass: ${element.atomicMass}<br />
        atomicNumber: ${element.atomicNumber}<br />
        ` +
          '<img width="100" height="100" src="https://cdn.discordapp.com/attachments/836363285803827230/837488588383191071/UEZKFtjpvJYb5xiWi5nuFd.jpeg" /> ',
        focusConfirm: true,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
      })
    }
    else if(element.name == "Rubidium"){
      Swal.fire({
        title: `<strong>${element.name}</strong>`,
        icon: 'info',
        html:
        `
        symbol: ${element.symbol}<br />
        atomicMass: ${element.atomicMass}<br />
        atomicNumber: ${element.atomicNumber}<br />
        ` +
          '<img width="100" height="100" src="https://cdn.discordapp.com/attachments/836363285803827230/837488059309096970/bLVuDQsGh2dF7P3jgytc3D.jpeg" /> ',
        focusConfirm: true,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
      })
    }
    else if(element.name == "Gold"){
      Swal.fire({
        title: `<strong>${element.name}</strong>`,
        icon: 'info',
        html:
        `
        symbol: ${element.symbol}<br />
        atomicMass: ${element.atomicMass}<br />
        atomicNumber: ${element.atomicNumber}<br />
        ` +
          '<img width="100" height="100" src="https://cdn.discordapp.com/attachments/836363285803827230/837488709568823296/download_3.jpeg" /> ',
        focusConfirm: true,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
      })
    }
    else if(element.name == "Zinc"){
      Swal.fire({
        title: `<strong>${element.name}</strong>`,
        icon: 'info',
        html:
        `
        symbol: ${element.symbol}<br />
        atomicMass: ${element.atomicMass}<br />
        atomicNumber: ${element.atomicNumber}<br />
        ` +
          '<img width="100" height="100" src="https://cdn.discordapp.com/attachments/836363285803827230/837488765072965692/download_4.jpeg" /> ',
        focusConfirm: true,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
      })
    }
    else if(element.name == "Palladium"){
      Swal.fire({
        title: `<strong>${element.name}</strong>`,
        icon: 'info',
        html:
        `
        symbol: ${element.symbol}<br />
        atomicMass: ${element.atomicMass}<br />
        atomicNumber: ${element.atomicNumber}<br />
        ` +
          '<img width="100" height="100" src="https://cdn.discordapp.com/attachments/836363285803827230/837476681487745084/Sulfur-sample.png" /> ',
        focusConfirm: true,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
      })
    }
    else if(element.name == "Platinum"){
      Swal.fire({
        title: `<strong>${element.name}</strong>`,
        icon: 'info',
        html:
        `
        symbol: ${element.symbol}<br />
        atomicMass: ${element.atomicMass}<br />
        atomicNumber: ${element.atomicNumber}<br />
        ` +
          '<img width="100" height="100" src="https://cdn.discordapp.com/attachments/836363285803827230/837476681487745084/Sulfur-sample.png" /> ',
        focusConfirm: true,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
      })
    }
    else if(element.name == "Manganese"){
      Swal.fire({
        title: `<strong>${element.name}</strong>`,
        icon: 'info',
        html:
        `
        symbol: ${element.symbol}<br />
        atomicMass: ${element.atomicMass}<br />
        atomicNumber: ${element.atomicNumber}<br />
        ` +
          '<img width="100" height="100" src="https://cdn.discordapp.com/attachments/836363285803827230/837476681487745084/Sulfur-sample.png" /> ',
        focusConfirm: true,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
      })
    }
    else if(element.name == "Lead"){
      Swal.fire({
        title: `<strong>${element.name}</strong>`,
        icon: 'info',
        html:
        `
        symbol: ${element.symbol}<br />
        atomicMass: ${element.atomicMass}<br />
        atomicNumber: ${element.atomicNumber}<br />
        ` +
          '<img width="100" height="100" src="https://cdn.discordapp.com/attachments/836363285803827230/837489357891829790/Z.png" /> ',
        focusConfirm: true,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
      })
    }
    else if(element.name == "Osmium"){
      Swal.fire({
        title: `<strong>${element.name}</strong>`,
        icon: 'info',
        html:
        `
        symbol: ${element.symbol}<br />
        atomicMass: ${element.atomicMass}<br />
        atomicNumber: ${element.atomicNumber}<br />
        ` +
          '<img width="100" height="100" src="https://cdn.discordapp.com/attachments/836363285803827230/837476681487745084/Sulfur-sample.png" /> ',
        focusConfirm: true,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
      })
    }
    else if(element.name == "Rhenium"){
      Swal.fire({
        title: `<strong>${element.name}</strong>`,
        icon: 'info',
        html:
        `
        symbol: ${element.symbol}<br />
        atomicMass: ${element.atomicMass}<br />
        atomicNumber: ${element.atomicNumber}<br />
        ` +
          '<img width="100" height="100" src="https://cdn.discordapp.com/attachments/836363285803827230/837488803727015976/Z.png" /> ',
        focusConfirm: true,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
      })
    }
    else if(element.name == "Tungsten"){
      Swal.fire({
        title: `<strong>${element.name}</strong>`,
        icon: 'info',
        html:
        `
        symbol: ${element.symbol}<br />
        atomicMass: ${element.atomicMass}<br />
        atomicNumber: ${element.atomicNumber}<br />
        ` +
          '<img width="100" height="100" src="https://cdn.discordapp.com/attachments/836363285803827230/837488308815790160/Screen_Shot_2021-04-30_at_3.39.26_AM.png" /> ',
        focusConfirm: true,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
      })
    }
    else if(element.name == "Cerium"){
      Swal.fire({
        title: `<strong>${element.name}</strong>`,
        icon: 'info',
        html:
        `
        symbol: ${element.symbol}<br />
        atomicMass: ${element.atomicMass}<br />
        atomicNumber: ${element.atomicNumber}<br />
        ` +
          '<img width="100" height="100" src="https://cdn.discordapp.com/attachments/836363285803827230/837488202126196736/Screen_Shot_2021-04-30_at_3.38.59_AM.png" /> ',
        focusConfirm: true,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
      })
    }else {
      Swal.fire({
        title: `<strong>${element.name}</strong>`,
        icon: 'info',
        html:
        `
        symbol: ${element.symbol}<br />
        atomicMass: ${element.atomicMass}<br />
        atomicNumber: ${element.atomicNumber}<br />
        `,
        focusConfirm: true,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
      })
    }

  

  }

  return (
    <>
    <div className="pageoutline">
  <h1 className="Title">Teachemi</h1>
  <center><input className="inputelement" type="text" placeholder="Enter element name: " onChange={(e) => {Search(e.target.value)}} /></center>
    <div className="container" id="periodic-table">
     
    {UnstableData.map(elements => 
    <div onClick={async () => await ShowInfo(elements)} className={`element ${elements.symbol}`}>
      <div className="atomic-number">{elements.atomicNumber}</div>
      <div className="name">{elements.name}</div>
      <div className="symbol">{elements.symbol}</div>
    </div>
    )}
	
	<center><div className="lanthanide">
		<span className="arrow"></span>
	</div>
	<div className="actinide">
		<span className="arrow"></span>
	</div>
  </center>
</div>
</div>
    </>
  );
}

export default App;
