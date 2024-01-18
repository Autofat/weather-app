export const getDate = () =>{
    const date = new Date().toLocaleDateString(
        'en-Us',{
        weekday: 'short',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    return date;
}