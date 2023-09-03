import Booking from "@/components/Booking/Booking";
import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div className=''>
    {/* <UserLocationContext.Provider value={{userLocation,setUserLocation}}>
    <SourceCordiContext.Provider value={{soruceCordinates,setSourceCordinates}}>
    <DestinationCordiContext.Provider value={{destinationCordinates,setDestinationCordinates}}>
    <DirectionDataContext.Provider value={{directionData,setDirectionData}}> */}
   <div className='grid grid-cols-1 
   md:grid-cols-3'>
      <div className=''>
        <Booking/>
      </div>
      <div className='col-span-2 order-first md:order-last
      '>
        Map
      </div>
   </div>
   {/* </DirectionDataContext.Provider>
   </DestinationCordiContext.Provider>
   </SourceCordiContext.Provider>
   </UserLocationContext.Provider> */}
  </div>
  )
}