const { useState, useEffect } = React;

const App = () => {
  const [signatureMoment, setSignatureMomentState] = useState(window.__DT_TWEAKS__?.signatureMoment || 'graph');
  const [tweaksVisible, setTweaksVisible] = useState(false);

  const setSignatureMoment = (v) => {
    setSignatureMomentState(v);
    window.parent?.postMessage({ type: '__edit_mode_set_keys', edits: { signatureMoment: v } }, '*');
  };

  useEffect(() => {
    const onMsg = (e) => {
      if (!e.data) return;
      if (e.data.type === '__activate_edit_mode') setTweaksVisible(true);
      if (e.data.type === '__deactivate_edit_mode') setTweaksVisible(false);
    };
    window.addEventListener('message', onMsg);
    window.parent?.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero signatureMoment={signatureMoment} />
        <Problem />
        <Concept />
        <Terminal />
        <Crews />
        <Credibility />
        <EarlyAccess />
      </main>
      <Footer />
      <TweaksPanel signatureMoment={signatureMoment} setSignatureMoment={setSignatureMoment} visible={tweaksVisible} />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
