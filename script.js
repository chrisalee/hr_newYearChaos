/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
    // below too slow for some cases
    // let totalBribes = 0;
    // for(let i = 0; i < q.length - 1; i++) {
    //     let currBribes = 0
    //     for(let j = i + 1; j < q.length; j++) {
    //         if (q[i] > q[j]) {
    //             currBribes++;
    //             if (currBribes > 2) {
    //                 console.log("Too chaotic");
    //                 return "Too chaotic";
    //             }
    //             totalBribes++;
    //         }    
    //     }
    // }
    // console.log(totalBribes);
    // return totalBribes;

    let totalBribes = 0;
    for (let i = 0; i < q.length; i++) {
        let isHere = q[i];
        let shouldBeHere = i + 1;
        if (isHere - shouldBeHere > 2) {
            console.log("Too chaotic");
            return "Too chaotic";
        }
        for (let j = Math.max(0, isHere - 2); j < i; j++)
            if (q[j] > isHere) totalBribes++;
    }
    console.log(totalBribes);
    return totalBribes;
}
