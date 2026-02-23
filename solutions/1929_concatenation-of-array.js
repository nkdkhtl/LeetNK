1
2
3
4
5
6
7
8
9
10
11
class Solution {public:    vector<int> getConcatenation(vector<int>& nums) {        vector<int> ans(nums.size() * 2, 0);        for (int i = 0; i < nums.size(); i++) {            ans[i] = nums[i];            ans[nums.size() + i] = nums[i];        }        return ans;    }};
class Solution {public:    vector<int> getConcatenation(vector<int>& nums) {        vector<int> ans(nums.size() * 2, 0);        for (int i = 0; i < nums.size(); i++) {            ans[i] = nums[i];            ans[nums.size() + i] = nums[i];        }        return ans;    }};
class Solution {
public:
vector<int> getConcatenation
(vector<int>& nums) {
vector<int> ans(nums.
size() * 2, 0);
for (int i = 0; i <
nums.size(); i++) {
ans[i] = nums[i];
ans[nums.size() +
i] = nums[i];
}
return ans;
}
};