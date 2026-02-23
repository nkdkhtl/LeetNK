for (int i = 0; i < nums.size(); i++) {
            ans[i] = nums[i];
public:
    vector<int> getConcatenation(vector<int>& nums) {
        vector<int> ans(nums.size() * 2, 0);
class Solution {
            ans[nums.size() + i] = nums[i];
        }
        return ans;
    }
};