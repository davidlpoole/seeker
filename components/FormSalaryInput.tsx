export default function FormSalaryInput() {
  return (
    <div class="flex gap-2 justify-between items-center sm:grid">
      <label>
        Salary
      </label>
      <div class="flex gap-2">
        <input
          class=" w-28 px-2 py-1 border-black border-2 rounded bg-white hover:bg-gray-200 transition-colors text-[#E70279]"
          type="text"
          name="salaryMin"
          placeholder="From (any)"
        />
        <input
          class="w-28 px-2 py-1 border-black border-2 rounded bg-white hover:bg-gray-200 transition-colors text-[#E70279]"
          type="text"
          name="salaryMax"
          placeholder="To (any)"
        />
      </div>
    </div>
  );
}
