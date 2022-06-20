import React from "react";

const Card = () => {
    return (
        <div class="flex flex-col items-center p-8 w-8/12 h-4/6 rounded-3xl backdrop-blur-sm bg-white/60 shadow-white shadow-md">
            <div class="w-10/12 text-black text-5xl ">
                some text
            </div>
            <div class="flex w-10/12 text-black mt-36">
                <div class="text-8xl w-5/12">
                    Text
                </div>
                <div class="text-4xl w-full flex items-end justify-around">
                    <span>some desc</span>
                </div>
            </div>
        </div>
    )
}


const Homepage = () => {
    return (
        <div class="flex justify-center relative items-center space-x-1.5 h-screen w-full bg-black text-white overflow-hidden">
            <div class="bottom-8 left-1 bg-none border-8 rounded-3xl border-gray-400 absolute h-900 w-932 rotate-45">
            </div>
            <div class="bottom-48 right-32 bg-none border-8 rounded-3xl border-gray-400 absolute h-900 w-932 rotate-12">
            </div>
            <Card/>
        </div>
    )
}

export default Homepage;