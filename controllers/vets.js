const Vet = require("../models/Vet");

exports.findVets = async (req, res) => {
  const vets = await Vet.find();
  res.send({ data: vets });
};

exports.createVet = async (req, res) => {
  const vet = new Vet(req.body);
  await vet.save();
  res.send({ data: vet });
};

exports.findVet = async (req, res) => {
  try {
    const vet = await Vet.findById(req.params.doctorID);
    res.send({ data: vet });
  } catch {
    res.status(404).send({ error: "Vet is not found!" });
  }
};

exports.updateVet = async (req, res) => {
  try {
    const vet = await Vet.findById(req.params.doctorID);
    Object.assign(vet, req.body);
    vet.save();
    res.send({ data: vet });
  } catch {
    res.status(404).send({ error: "Vet is not found!" });
  }
};

exports.deleteVet = async (req, res) => {
  try {
    const vet = await Vet.findById(req.params.doctorID);
    await vet.remove();
    res.send({ data: true });
  } catch {
    res.status(404).send({ error: "Vet is not found!" });
  }
};