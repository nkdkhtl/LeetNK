/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var groupedObj = strs.reduce((acc, str) => {
        let sortedKey = str.split('').sort().join('');
        
        if (!acc[sortedKey]) {
            acc[sortedKey] = [];
        }
        
        acc[sortedKey].push(str);
        return acc;
    }, {});

    return  Object.values(groupedObj);
};