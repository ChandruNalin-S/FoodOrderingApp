const Contact = ()=>{
  return (
    <div className="m-2 p-2">
      <h2 className="font-bold text-xl">Contact Us</h2>
      <form>
        <input className="m-2 p-2 border border-black rounded-lg" type="text" placeholder="Name"/>
        <input className="m-2 p-2 border border-black rounded-lg" type="text" placeholder="message"/>
        <button className="p-2 text-base bg-red-700 rounded-lg text-white">Submit</button>
      </form>
    </div>
  );
}

export default Contact;