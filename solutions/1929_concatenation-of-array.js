for (int i = 0; i < nums.size(); i++) {
            ans[i] = nums[i];
            ans[nums.size() + i] = nums[i];
        }
        return ans;
    }