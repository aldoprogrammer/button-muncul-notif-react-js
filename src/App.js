import React, { useState } from 'react';



const App = () => {
  const [isNotif, setIsNotif] = useState(false);

  const notif = () => {
    setIsNotif(!isNotif);
  }

  console.log({ isNotif});

 return (
  <>
  <button onClick={notif}>{isNotif ? "Tutup Dong" : "Lihat notif"}</button>
  { isNotif ? ( <h2>Ini notifikasi nilainya true ehhe</h2> ) : ( <h2>Ini notifikasi nilainya false ehhe</h2> )}
  <h1>Hello</h1>
  </>
  )
};

export default App;
