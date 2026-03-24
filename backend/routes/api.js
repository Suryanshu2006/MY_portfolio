const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');
const Internship = require('../models/Internship');
const Project = require('../models/Project');

// SKILLS API
router.get('/skills', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/skills', async (req, res) => {
  const skill = new Skill(req.body);
  try {
    const savedSkill = await skill.save();
    res.status(201).json(savedSkill);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// INTERNSHIPS API
router.get('/internships', async (req, res) => {
  try {
    const internships = await Internship.find();
    res.json(internships);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/internships', async (req, res) => {
  const internship = new Internship(req.body);
  try {
    const savedInternship = await internship.save();
    res.status(201).json(savedInternship);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PROJECTS API
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/projects', async (req, res) => {
  const project = new Project(req.body);
  try {
    const savedProject = await project.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

const { sendEmail } = require('../services/mailService');

// CONTACT API
router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await sendEmail(name, email, message);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (err) {
    console.error('Mail Error:', err);
    res.status(500).json({ 
      message: 'Error sending email', 
      details: err.message,
      code: err.code 
    });
  }
});

// Get all certificates
router.get('/certificates', async (req, res) => {
  try {
    const Certificate = require('../models/Certificate');
    const certificates = await Certificate.find();
    res.json(certificates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
