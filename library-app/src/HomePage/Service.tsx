import Swal from "sweetalert2";

function Alert() {
    Swal.fire({
        title: 'Success!',
        text: 'You have successfully singed up!',
        icon: 'success',
        confirmButtonText: 'Cool'
        });
}

export const Service = () => {
    return (
        <>
        <div className="flex border m-[6%] bg-indigo-100 rounded-2xl shadow-2xl">
            <img src={require("../img/bakubcinter.jpg")} className="w-[400px] m-[5%] rounded-2xl shadow-xl" alt="Inter of BBC" />
            <div className="flex-col justify-center mt-[5%]">
                <h3 className="mt-[2%] text-indigo-700 text-5xl font-bold">Get Acceses Card to all libraries!</h3>
                <p className="text-2xl mt-[5%] text-indigo-600">
                    If you interested in getting acceses to all libraries of our patners <br />
                    Then <b>Sing Up for Free</b> in our Web Site and get our subcribtion! <br />
                    You will get your card in 3 days! <br />
                    <b>DON'T MISS YOUR CHANCE!</b>
                </p>
                <button onClick={Alert} className="mt-[7%] rounded-lg border-indigo-800 border-1 shadow-xl  bg-indigo-400 w-[150px] h-[50px] text-3xl text-white font-extrabold hover:bg-indigo-800 focus:bg-indigo-950"> Sing Up </button>
            </div>
        </div>
        </>
    );
}