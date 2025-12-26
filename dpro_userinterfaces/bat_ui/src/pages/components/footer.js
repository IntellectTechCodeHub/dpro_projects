export default function Footer() {
    return(
        <div className="my-[2.5%] bg-color-slate-400 w-full items-center">
            <div className="h-full flex items-center justify-center">
              <a href="#" className="text-mono text-xsm text-black"> Privacy </a>
              <p className="text-black text-extrabold text-xsm mx-[2.5%] p-[2.5%]"> | </p>
              <a href="#" className="text-mono text-xsm text-black"> Corporate </a>
              <p className="text-black text-extrabold text-xsm mx-[2.5%] p-[2.5%]"> | </p>
              <a href="#" className="text-mono text-xsm text-black" > Sponsors </a>
            </div>
            <p className="m-[2.5%] items-center text-center text-xsm"> Disclaimer: All app activity is subject to data logging. All data privacy, safety, and security regulations are followed in the appropriate use and storage of user activity. No user information is sold for proprietary purposes.</p>
        </div>
    );
}