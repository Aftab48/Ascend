
type TeamProps = {
content:string
  left?:string,
  right?:string,
  top?:string,
  bottom?:string
  classname?:string
};


export function Tools({content,left,right,top,bottom,classname}:TeamProps){

  return (
    <div className={` bg-[#1FE5FF] text-black text-2xl flex flex-col items-center justify-center p-5 rounded-full  md:max-w-75 lg:w-90 ${classname} shadow-[inset_0_0_10px_#0C606B]`} 
    style={{
        left,
        right,
        top,
        bottom,
        position: 'absolute',
        
      }}
    >
      {content}
    </div>
  );
}

export default Tools;