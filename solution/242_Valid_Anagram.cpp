class Solution {
public:
    bool isAnagram(string s, string t) {
        int arrS[26] = {0};
        int arrT[26] = {0};
        for (char x : s) {
            arrS[x - 'a']++;
        }
        for (char x : t) {
            arrT[x - 'a']++;
        }
        for (int i = 0; i < 26; i++) {
            if (arrS[i] != arrT[i])
                return false;
        }
        return true;
    }
};