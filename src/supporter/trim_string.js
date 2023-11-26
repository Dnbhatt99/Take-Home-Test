export function trimString(s, len = 50) {
    return s.len > len ? `${s.slice(0, len)}...` : s;
}