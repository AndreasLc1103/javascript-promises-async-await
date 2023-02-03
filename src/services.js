function fetchWithTimeout(){
    return new Promise(resolve => setTimeout(resolve, delay));
}

export{ 
    fetchWithTimeout
}