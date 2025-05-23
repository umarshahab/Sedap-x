export default function HelloWorld(){

    const propsUserCard ={
        nama: "Luffy",
        nim: "555555",
        tanggal: "1995-01-01"
    }

    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <QuoteText/>
            <UserCard 
                nama="Umar Shahab"
                nim="2355301203"
                tanggal={new Date().toLocaleDateString()}
            /> 
            <UserCard {...propsUserCard}/>

            <img src="img/luffy.jpg" alt="logo"/>
        </div>
    )
}

function GreetingBinjai(){
    return(
        <small>salam dari binjaii</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return(
        <div>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}