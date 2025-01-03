/* mcq

    1. render props vs HOC
    2. benefit of render props
    3. how to achieve render props
    4. main use of HOC
    5. drawback of render props

*/

// code 

/**
 * sam can break stick into parts such as parity of length of each part is same.(all parts are even or odd)
 * can sam obtain a stick of length exactly X by doing this?
 * 
 * T -> test case
 * N X -> [length of stick] [obtain stick length]
 * 
 * input:
 * 3
 * 6 1 (6 -> divide -> 3,3 -> 1,1,1,1,1,1 parity is same(odd))
 * 3 2 (3 -> divide in 2,1 but parity is different)
 * 4 3 (4 -> divide in 3,1 parity is same)
 * 
 * output:
 * YES
 * NO
 * YES
 * 
 */