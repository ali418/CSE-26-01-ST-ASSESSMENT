  <div class="registration-layout">
    <div class="left-panel">
      <div class="logo-wrapper">
        <img src="../assets/fca-logo.jpg" alt="FCA Logo" class="logo" />
      </div>
      <h2 class="program-title">Refugee Support Program</h2>
    </div>

    <div class="right-panel">
      <h1 class="form-title">BENEFICIARY REGISTRATION FORM</h1>
      
      <form @submit.prevent="submitForm" class="registration-form">
        <div class="form-row">
          <div class="form-group">
            <label>First Name <span class="required">*</span></label>
            <input type="text" v-model="form.firstName" placeholder="Enter your First name" required />
          </div>
          <div class="form-group">
            <label>Last name <span class="required">*</span></label>
            <input type="text" v-model="form.lastName" placeholder="Enter your Last name" required />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Date of birth <span class="required">*</span></label>
            <input type="text" v-model="form.dob" placeholder="YYYY / MM / DD" required />
          </div>
<template>
  <div class="registration-layout">
    <div class="left-panel">
      <div class="logo-wrapper">
        <img src="../assets/fca-logo.jpg" alt="FCA Logo" class="logo" />
      </div>
      <h2 class="program-title">Refugee Support Program</h2>
    </div>

    <div class="right-panel">
      <h1 class="form-title">BENEFICIARY REGISTRATION FORM</h1>
      
      <form @submit.prevent="submitForm" class="registration-form">
        <div class="form-row">
          <div class="form-group">
            <label>First Name <span class="required">*</span></label>
            <input type="text" v-model="form.firstName" placeholder="Enter your First name" required />
          </div>
          <div class="form-group">
            <label>Last name <span class="required">*</span></label>
            <input type="text" v-model="form.lastName" placeholder="Enter your Last name" required />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Date of birth <span class="required">*</span></label>
          <div class="form-group">
            <label>Place of Birth <span class="required">*</span></label>
            <input type="text" v-model="form.placeOfBirth" placeholder="Enter your place of residence" required />
          </div>
        </div>

        <div class="form-group full-width">
          <label>Gender</label>
          <div class="radio-group-container">
            <label class="custom-radio">
              <input type="radio" value="Male" v-model="form.gender" />
              <span class="radio-mark"></span>
              Male
            </label>
            <label class="custom-radio">
              <input type="radio" value="Female" v-model="form.gender" />
              <span class="radio-mark"></span>
              Female
            </label>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Nationality <span class="required">*</span></label>
            <div class="select-wrapper">
              <select v-model="form.nationality" required>
                <option value="" disabled>-- Select Nationality --</option>
                <option value="Ugandan">Ugandan</option>
                <option value="Congolese">Congolese</option>
                <option value="South Sudanese">South Sudanese</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label>Marital status <span class="required">*</span></label>
            <div class="select-wrapper">
              <select v-model="form.maritalStatus" required>
                <option value="" disabled>-- Select Marital status --</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Widowed">Widowed</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Settlement camp <span class="required">*</span></label>
            <div class="select-wrapper">
              <select v-model="form.settlementCamp" required>
                <option value="" disabled>-- Select settlement camp --</option>
                <option value="Bidi Bidi">Bidi Bidi</option>
                <option value="Nakivale">Nakivale</option>
                <option value="Kyangwali">Kyangwali</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label>Date of joining Settlement camp <span class="required">*</span></label>
            <input type="text" v-model="form.dateOfJoining" placeholder="YYYY / MM / DD" required />
          </div>
        </div>

        <div class="form-actions">
          <button type="submit" class="submit-btn">Register</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  firstName: '',
  lastName: '',
  dob: '',
  placeOfBirth: '',
  gender: 'Male', // Defaulting to match image state
  nationality: '',
  maritalStatus: '',
  settlementCamp: '',
  dateOfJoining: ''
})

const submitForm = () => {
  // Handle form submission logic here
  console.log('Form Data:', form)
  alert('Form submitted successfully!')
}
</script>

<style scoped>
/* Color Palette Extracted from Images */
:root {
  --pale-green: #97C73A;
  --deep-green: #3B5B28;
  --border-color: #B2D469;
}

/* Base Layout */
.registration-layout {
  display: flex;
  min-height: 100vh;
  font-family: 'Arial Narrow', 'Oswald', sans-serif;
  background-color: #fcfcfc;
}

/* --- Left Panel Styling --- */
.left-panel {
  flex: 0 0 35%;
  background-color: var(--pale-green);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.logo-wrapper {
  background: white;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.logo {
  max-width: 60%;
  height: auto;
}

.program-title {
  color: white;
  font-size: 28px;
  text-transform: capitalize;
  letter-spacing: 1px;
}

/* --- Right Panel Styling --- */
.right-panel {
  flex: 1;
  padding: 40px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-title {
  color: var(--deep-green);
  text-align: center;
  font-size: 32px;
  margin-bottom: 40px;
  letter-spacing: 1.5px;
}

.registration-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: flex;
  gap: 30px;
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.full-width {
  width: 100%;
}

label {
  color: var(--deep-green);
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: 600;
}

.required {
  color: red;
}

input[type="text"],
select {
  padding: 12px 15px;
  border: 1px solid var(--border-color);
  border-radius: 2px;
  font-size: 14px;
  outline: none;
  color: #555;
  transition: border-color 0.3s;
}

input[type="text"]:focus,
select:focus {
  border-color: var(--pale-green);
}

input::placeholder {
  color: #bbb;
}

/* Custom Select Dropdown Arrow */
.select-wrapper {
  position: relative;
}

select {
  width: 100%;
  appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  color: #999;
}

.select-wrapper::after {
  content: '▼';
  font-size: 12px;
  color: var(--pale-green);
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

/* Custom Radio Buttons */
.radio-group-container {
  display: flex;
  gap: 100px;
  padding: 12px 15px;
  border: 1px solid var(--border-color);
  border-radius: 2px;
  justify-content: center;
}

.custom-radio {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding-left: 30px;
  color: #555;
  font-family: Arial, sans-serif;
  font-size: 15px;
}

.custom-radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.radio-mark {
  position: absolute;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: white;
  border: 3px solid var(--deep-green);
  border-radius: 50%;
}

.custom-radio input:checked ~ .radio-mark {
  border-color: var(--deep-green);
}

.custom-radio input:checked ~ .radio-mark::after {
  content: "";
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--deep-green);
}

/* Submit Button */
.form-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.submit-btn {
  background-color: var(--pale-green);
  color: white;
  border: none;
  padding: 15px 60px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #85b033; /* Slightly darker shade on hover */
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .registration-layout {
    flex-direction: column;
  }
  .left-panel, .right-panel {
    flex: none;
    width: 100%;
  }
  .form-row {
    flex-direction: column;
    gap: 20px;
  }
  .radio-group-container {
    gap: 40px;
  }
}
</style>