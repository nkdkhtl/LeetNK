class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_set<long> seen;
        for (long num : nums) {
            if (seen.find(num) != seen.end()) {
                return true;
            }
            seen.insert(num);
        }
        return false;
    }
};