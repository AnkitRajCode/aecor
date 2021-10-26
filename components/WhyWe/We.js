import Image from "next/image";
import { useSpring, animated, config } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 50, (x - window.innerWidth / 2) / 50, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const We = () => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))
  return (
    <div className=" overflow-x-hidden">
        <div className="absolute lg:mt-60 lg:ml-10 mt-10 ml-5">
        <Image src = "/img/art.png" height={229} width={231}/>
        </div>
      <div className="container flex flex-col lg:flex-row items-center gap-12 mt-14 lg:mt-28 ml-28 -ml-8">
        {/* content */}
        
        <div className="flex flex-1 flex-col items-center lg:items-start  md:ml-10 ml-10 lg:ml-32">
        
          <h2 className="text-purple-900 text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6 font-bold z-10">
            Why We Are <br />
            Better Than Others
          </h2>
          
          <p className="text-bookmark-grey text-lg  lg:text-left mb-6 break-words text-gray-500 text-justify lg:w-5/6 ml-5 lg:ml-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            dignissim tempus ligula, sedlyf egestas libero pharetra
            eget.Phasellus dignissim tempus ligula, sedlyf egestas libero
            pharetra eget. Phasellus dignissim tempus ligula, sed egestas libero
            pharetra eget.
          </p>
        </div>
        {/* image */}
        <div className="flex-col justify-center flex-1 mb-10 md:mb-16 lg:mb-0 lg:ml-60 ml-16">
        <animated.div className = "cursor-pointer" onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}>
            <Image src="/img/ios.png" width={251} height={358} />
          </animated.div>

          <animated.div  className = "cursor-pointer" onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)}}
          >
            <Image src="/img/android.png" width={251} height={358} />
          </animated.div>
        </div>
        <animated.div className="lg:-ml-52 flex-col justify-center flex-1 mb-10 md:mb-16 lg:mb-0 cursor-pointer ml-16 -mt-20"
        onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
        onMouseLeave={() => set({xys:[0,0,1]})}
        style={{
            transform: props.xys.interpolate(trans)}}
      
        >
          <Image src="/img/web.png" width={251} height={358} />
        </animated.div>
      </div>

      <style jsx>{`
        .container {
            // margin-left:70px;
            padding-top: 50px;
            padding-bottom: 50px;
        }
      `}</style>
    </div>
  );
};

export default We;
