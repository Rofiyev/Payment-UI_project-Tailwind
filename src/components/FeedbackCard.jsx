import quotes from '../image/quotes.svg';

const FeedbackCard = ({ content, name, title }) => {
  return (
    <div className={`flex justify-between flex-col px-10 py-12 rounded-[10px] w-full md:mr-10 sm:mr-5 mr-0 my-5 cursor-pointer feedback-card`}>
      <img src={quotes} alt="quates" className='w-[420px] h-[27px] object-contain' />
      <p className='font-montserrat font-normal text-[18px] leading-[32px] text-white my-10'>{content}</p>

      <div className='flex flex-row '>
        <div className="w-[50px] h-[50px] flex justify-center items-center bg-dark-gradeint rounded-full">
          <span className='font-montserrat font-semibold text-[20px] text-gradient'>{name.split(" ").map((n) => n[0]).join("")}</span>
        </div>
        <div className="flex flex-col ml-4">
          <h4 className='font-montserrat font-semibold text-[20px] leading-[32px] text-white'>{name}</h4>
          <p className='font-montserrat font-normal text-[16px] leading-[24px] text-lightWhite'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard