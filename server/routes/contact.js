import { Router } from "express";
import Contact from "../db/models/contact.js";
const router = Router();

router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).send(contact);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const { leido, favorito, eliminado } = req.query;
    const query = {};
    if (leido) {
      query.leido = true;
    }

    if (favorito) {
      query.favorito = true;
    }

    if (eliminado) {
      query.eliminado = true;
    }

    const contacts = await Contact.find(query);
    res.status(200).send(contacts);
  } catch (error) {
    res.status(500).send(error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).send();
    }
    res.status(200).send(contact);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!contact) {
      return res.status(404).send();
    }
    res.status(200).send(contact);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).send();
    }
    res.status(200).send(contact);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/leido", async (req, res) => {
  try {
    const leidoContacts = await Contact.find({ leido: true });
    res.status(200).send(leidoContacts);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
