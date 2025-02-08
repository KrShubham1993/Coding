// (.) means same level interception
// here, whenever there is a "clickable LINK" (not direct url entry) that takes from f1 to f2 =>
    // the intercepted route will get executed first
    // then if we relaod the actual route will get executed

    // when we go forward in directory / route through link, the intercepted folder should be in same level 
    // (.) --> so since we are going from f1 to f2 the (.)f2 should be in f1 FROM WHERE we are going forward
    // (..) --> its for one level backwards and this folder will again be in the folder/route from where we start travelling
    // (..)(..) -> its for 2 level back wards but this is a bug for now with next js
    // (...) its for root level interception.. so if from any nested level we have a link to somewhere in root like "href = /about"

export default function f2() {
    return (
        <div>
            intercepted f2
        </div>
    );
}