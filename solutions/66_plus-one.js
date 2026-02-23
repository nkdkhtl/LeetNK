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
12
13
14
15
16
17
class Solution {public:    vector<int> plusOne(vector<int>& digits) {        int n = digits.size();        for (int i = n - 1; i >= 0; i--) {            if (digits[i] < 9) {                digits[i]++;                return digits;            }            digits[i] = 0;        }        digits.insert(digits.begin(), 1);        return digits;    }};
class Solution {public:    vector<int> plusOne(vector<int>& digits) {        int n = digits.size();        for (int i = n - 1; i >= 0; i--) {            if (digits[i] < 9) {                digits[i]++;                return digits;            }            digits[i] = 0;        }        digits.insert(digits.begin(), 1);        return digits;    }};
class Solution {
public:
vector<int> plusOne
(vector<int>& digits) {
int n = digits.size();
for (int i = n - 1; i
>= 0; i--) {
if (digits[i] < 9) {
digits[i]++;
return digits;
}
digits[i] = 0;
}
digits.insert(digits.
begin(), 1);
return digits;
}
};