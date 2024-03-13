import React, { useState, useEffect } from 'react';

const App = () => {
  const [quote, setQuote] = useState('');
  const timetable = [
    { time: '6:30 am – 7:00 am', activity: 'Wake up', icon: 'alarm' },
    { time: '7:00 am – 7:15 am', activity: 'Fresh up + exercise', icon: 'fitness_center' },
    { time: '7:15 am – 8:00 am', activity: 'Planning', icon: 'event_note' },
    { time: '8:00 am – 12:00 pm', activity: 'Study slot', icon: 'book' },
    { time: '12:00 pm – 1:00 pm', activity: 'Lunch', icon: 'local_dining' },
    { time: '1:00 pm – 1:30 pm', activity: 'Revise inorganic chemistry', icon: 'science' },
    { time: '1:30 pm – 2:00 pm', activity: 'Break', icon: 'local_cafe' },
    { time: '2:00 pm – 6:00 pm', activity: 'Study slot', icon: 'book' },
    { time: '6:00 pm – 7:00 pm', activity: 'Booster activity', icon: 'sports_kabaddi' },
    { time: '7:00 pm – 7:30 pm', activity: 'Revision', icon: 'replay' },
    { time: '7:30 pm – 8:30 pm', activity: 'Dinner', icon: 'local_dining' },
    { time: '8:30 pm – 12:30 am', activity: 'Study', icon: 'book' },
    { time: '12:30 am – 6:30 am', activity: 'Sleep', icon: 'bedtime' },
  ];

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      console.log(data)
      setQuote(data.content);
    } catch (error) {
      console.error('Failed to fetch quote:', error);
      setQuote('Failed to fetch quote. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 font-poppins">
      <div className="background-image absolute top-0 left-0 w-full h-full z-0" style={{ backgroundImage: `url('https://source.unsplash.com/random/1920x1080/?motivation')` }}></div>
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

      <div className="bg-[rgba(255,255,255,0.8)] p-8 rounded-lg shadow-lg z-10 text-gray-800">
        <h1 className="text-4xl font-bold text-center mb-8">Daily Quotes</h1>
        <div id="quote-container" className="text-sm italic text-center mb-8">{`"${quote}"`}</div>
        <h2 className="text-3xl font-bold text-center mb-4">Study Timetable</h2>
        <div className="grid grid-cols-2 gap-4">
          {timetable.map((slot, index) => (
            <div key={index} className="flex items-center">
              <span className="material-icons mr-2">{slot.icon}</span>
              <p>{slot.time} → {slot.activity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
