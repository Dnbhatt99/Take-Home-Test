export function parseDate(date_gmt) {
    const num = Date.parse(date_gmt);
    const date = new Date(num);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'];
  
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}
