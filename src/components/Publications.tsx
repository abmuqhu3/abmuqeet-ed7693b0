import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, ChevronDown, BookOpen, Eye, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const publications = [
  {
    title: "A Real-Time Driver Drowsiness and Attention Warning System Using Adaptive Facial Landmark Analysis and Hierarchical Alert Architecture",
    authors: "Kalaigar Abdul Muqeet, Dr. Rajalakshmi",
    venue: "Conference Paper",
    institution: "TiHAN, IIT Hyderabad",
    year: "2026",
    abstract:
      "We present DDAWS, a lightweight, camera-only framework that fuses per-driver adaptive calibration with six concurrent physiological cues — Eye Aspect Ratio (EAR), Mouth Aspect Ratio (MAR), PERCLOS, estimated Karolinska Sleepiness Scale (KSS), and 3-D head-pose yaw and pitch — under a two-tier hierarchical alert scheme with explicit state recovery. The pipeline runs on a standard CPU at under 5 ms per frame with no GPU and no pre-trained weights. Tested on 23 participants across 63,544 frames (35.3 min), DDAWS achieved a mean Detection Rate of 79.09%, Alert Precision of 72.09%, Gaze Consistency of 85.83%, and a Composite System Score of 69.67%.",
    keywords: ["Driver Drowsiness Detection", "PERCLOS", "Eye Aspect Ratio", "MediaPipe FaceMesh", "Karolinska Sleepiness Scale", "Adaptive Calibration", "Real-time Safety Systems"],
    pdfUrl: "/papers/ddaws-conference.pdf",
    isPdf: true,
  },
  {
    title: "Identification and Classification of Pneumonia Medical Condition using U-Net Algorithm",
    authors: "Kalaigar Abdul Muqeet, Kiran MC, Vasanthakumar GU",
    venue: "RCAAI 2025",
    institution: "Taylor & Francis",
    year: "2026",
    abstract:
      "Pneumonia remains a leading cause of death worldwide. This paper presents a U-Net model in conjunction with deep learning to automate classification and segmentation of diseased lung sections from X-ray images. The model is trained for pixel-wise segmentation, generating masks that accurately delineate lung regions affected by pneumonia. Performance metrics include Dice coefficient (0.76), IoU (0.62), and classification accuracy of 89%.",
    keywords: ["Deep Learning", "Image Segmentation", "U-Net Architecture", "Pixel-wise Segmentation"],
    pdfUrl: "/papers/pneumonia-unet.pdf",
    isPdf: true,
  },
  {
    title: "Optical Character Recognition Assisted Automated Medication Prescription Reader System",
    authors: "Kalaigar Abdul Muqeet, Kiran MC, Vasanthakumar GU",
    venue: "RCAAI 2025",
    institution: "Taylor & Francis",
    year: "2026",
    abstract:
      "This paper presents a web-based system that uses Google Vision API to extract medicine names, dosages, and frequencies from printed prescriptions. The system preprocesses prescription images with OpenCV, organizes extracted text with NLP and regex approaches. Features a pharmaceutical reminder system that alerts users about scheduled dosages and monitors medication supply.",
    keywords: ["Google Vision API", "OCR", "Prescription Recognition", "NLP", "Reinforcement Learning"],
    pdfUrl: "/papers/ocr-prescription.pdf",
    isPdf: true,
  },
];

const PublicationCard = ({ pub, index }: { pub: typeof publications[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const [pdfOpen, setPdfOpen] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="floating-card-glow p-6 md:p-7 transition-all duration-500"
      >
        <div className="flex gap-5">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mt-1">
            <BookOpen className="h-5 w-5 text-primary/70" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-base font-rajdhani font-bold text-foreground/85 leading-snug mb-2 hover:text-foreground transition-colors tracking-wide">
              {pub.title}
            </h3>

            <p className="text-muted-foreground/50 mb-1 font-mono-code text-xs">{pub.authors}</p>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="tech-badge !border-primary/20 !text-primary/70 !bg-primary/5">{pub.venue}</span>
              <span className="text-xs text-muted-foreground/30">{pub.institution}</span>
              <span className="text-xs text-muted-foreground/25 font-mono-code">{pub.year}</span>
            </div>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="floating-card p-5 mb-4">
                    <p className="text-[10px] font-orbitron font-semibold uppercase tracking-[0.2em] text-primary/60 mb-3">Abstract</p>
                    <p className="text-sm text-muted-foreground/55 leading-relaxed font-space">{pub.abstract}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.keywords.map((kw) => (
                      <span key={kw} className="tech-badge">
                        {kw}
                      </span>
                    ))}
                  </div>

                  {pub.isPdf && (
                    <div className="mb-4 floating-card overflow-hidden">
                      <div className="flex items-center px-4 py-2.5 bg-secondary/30 border-b border-border/30">
                        <span className="text-[10px] font-orbitron font-semibold text-primary/60 uppercase tracking-[0.2em]">Paper Preview</span>
                      </div>
                      <iframe
                        src={pub.pdfUrl + "#toolbar=0&navpanes=0&scrollbar=1"}
                        className="w-full h-[500px]"
                        title={`Preview: ${pub.title}`}
                        style={{ border: "none" }}
                      />
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1.5 text-[11px] font-orbitron text-primary/60 hover:text-primary transition-colors duration-300 tracking-wider"
              >
                {expanded ? "COLLAPSE" : "EXPAND"}
                <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
              </button>

              {pub.isPdf && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPdfOpen(true)}
                  className="text-[10px] font-orbitron border-border/40 hover:border-primary/40 text-muted-foreground/50 hover:text-foreground/80 rounded-xl h-7 tracking-wider"
                >
                  <Eye className="h-3 w-3 mr-1.5" />
                  PREVIEW PDF
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.article>

      {pub.isPdf && (
        <Dialog open={pdfOpen} onOpenChange={setPdfOpen}>
          <DialogContent className="max-w-5xl max-h-[90vh] bg-card border-border/30">
            <DialogHeader>
              <DialogTitle className="text-sm pr-8 font-rajdhani font-bold text-foreground/85 tracking-wide">{pub.title}</DialogTitle>
              <DialogDescription className="font-mono-code text-xs text-muted-foreground/50">{pub.authors} — {pub.venue} {pub.year}</DialogDescription>
            </DialogHeader>
            <div className="w-full h-[70vh] rounded-xl overflow-hidden border border-border/30">
              <iframe
                src={pub.pdfUrl + "#toolbar=0&navpanes=0&scrollbar=1"}
                className="w-full h-full"
                title={`Full Preview: ${pub.title}`}
                style={{ border: "none" }}
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

const Publications = () => {
  return (
    <section id="publications" className="section-padding relative">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="section-label">
              <FlaskConical className="h-3 w-3" />
              Research
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 tracking-wide">
            <span className="text-primary glow-text-blue">Publications</span>
          </h2>
          <p className="text-muted-foreground/45 mb-12 max-w-2xl text-sm font-space">
            Peer-reviewed research in driver safety systems, medical AI, computer vision, and intelligent systems.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-primary/60 to-transparent mb-12" />
        </motion.div>

        <div className="space-y-5">
          {publications.map((pub, i) => (
            <PublicationCard key={pub.title} pub={pub} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
