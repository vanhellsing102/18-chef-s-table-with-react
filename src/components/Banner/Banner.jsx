
const Banner = () => {
    return (
        <div>
            <div className="bg-[url('src/components/Banner/profile.jpg')] bg-no-repeat md:h-[600px] h-[300px] md:w-full rounded-md object-cover">
            <div className="flex justify-center flex-col items-center md:pt-52 pt-5 md:gap-8 text-center">
                <h1 className="text-4xl text-white font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
                <p className="text-white text-[18px]">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
                <div className="flex gap-5">
                    <button className="bg-[#0BE58A] text-white font-bold px-3 py-2 rounded-lg border-2 border-black hover:bg-slate-600">Explore Now</button>
                    <button className="px-3 py-2 bg-transparent rounded-lg border-2 border-black text-white hover:bg-slate-600">Our Feedback</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;